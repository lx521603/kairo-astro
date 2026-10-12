import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, motionEnabled } from '@/utils/dom';
import { setRollText } from '@/utils/roll';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FORMSPREE_SALES_URL = 'https://formspree.io/f/xnpjbglv';

export default function init() {
  const form = $<HTMLFormElement>('[data-sales-form]');
  if (!form) return;
  const intents = $$<HTMLInputElement>('[data-intent-input]', form);
  const submit = $<HTMLButtonElement>('[data-sales-submit]', form);
  const label = $('[data-submit-label]', form);
  const status = $('[data-sales-status]', form);

  const setIntent = (intent: string) => {
    intents.forEach((input) => (input.checked = input.value === intent));
    
    const joinFields = $('[data-join-fields]', form);
    const joinActions = $('[data-join-actions]', form);
    const contactContent = $('[data-contact-content]', form);
    const followContent = $('[data-follow-content]', form);

    // 默认隐藏所有内容
    if (joinFields) joinFields.hidden = true;
    if (joinActions) joinActions.hidden = true;
    if (contactContent) contactContent.hidden = true;
    if (followContent) followContent.hidden = true;

    // 根据选择显示对应内容，并添加平滑动画
    if (intent === 'join') {
      if (joinFields) {
        joinFields.hidden = false;
        if (motionEnabled()) gsap.fromTo(joinFields, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 });
      }
      if (joinActions) {
        joinActions.hidden = false;
        if (motionEnabled()) gsap.fromTo(joinActions, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 });
      }
      if (label) setRollText(label, label.dataset.join ?? '');
    } else if (intent === 'contact') {
      if (contactContent) {
        contactContent.hidden = false;
        if (motionEnabled()) gsap.fromTo(contactContent, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 });
      }
      if (label) setRollText(label, '扫码添加客服');
    } else if (intent === 'follow') {
      if (followContent) {
        followContent.hidden = false;
        if (motionEnabled()) gsap.fromTo(followContent, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 });
      }
      if (label) setRollText(label, '扫码关注 INS');
    }
    
    ScrollTrigger.refresh();
  };

  const readUrl = () => {
    const intent = new URLSearchParams(window.location.search).get('intent');
    if (intent === 'contact') setIntent('contact');
    else if (intent === 'follow') setIntent('follow');
    else setIntent('join');
  };

  intents.forEach((input) => input.addEventListener('change', () => setIntent(input.value)));
  document.addEventListener('kairo:url', readUrl);
  readUrl();

  const setError = (name: string, message: string) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null;
    const error = $(`[data-error-for="${name}"]`, form);
    input?.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    return !message;
  };

  $$<HTMLInputElement>('input[required]', form).forEach((input) => {
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') setError(input.name, '');
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // 只有在 "join" 模式下才允许提交
    const currentIntent = Array.from(intents).find(i => i.checked)?.value;
    if (currentIntent !== 'join') return;

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const agentType = String(data.get('agentType') ?? '').trim();
    const contactMethod = String(data.get('contactMethod') ?? '').trim();
    
    const valid = [
      setError('name', name ? '' : (form.dataset.errorName ?? '')),
      setError('email', EMAIL.test(email) ? '' : (form.dataset.errorEmail ?? '')),
      setError('agentType', agentType ? '' : (form.dataset.errorAgentType ?? '')),
      setError('contactMethod', contactMethod ? '' : (form.dataset.errorContactMethod ?? '')),
    ].every(Boolean);

    if (!valid) {
      $<HTMLInputElement>('[aria-invalid="true"]', form)?.focus();
      if (status) status.textContent = '';
      return;
    }

    if (!submit || !status) return;
    
    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    status.className = 'mt-6 min-h-6 text-sm text-mute';
    status.textContent = form.dataset.sending ?? '正在提交...';

    try {
      const response = await fetch(FORMSPREE_SALES_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (response.ok) {
        status.className = 'mt-6 min-h-6 text-sm text-bone';
        const template = form.dataset.successJoin ?? '';
        const firstName = name ? name.split(' ')[0] : '您';
        status.textContent = template.replace('{name}', firstName).replace('{email}', email);
        
        submit.removeAttribute('aria-busy');
        form.reset();
        setIntent('join');
        setTimeout(() => { submit.disabled = false; }, 1500);
      } else {
        const result = await response.json();
        const errorMsg = result.errors && result.errors.length > 0 ? result.errors[0].description : '提交失败，请稍后再试';
        status.className = 'mt-6 min-h-6 text-sm text-signal';
        status.textContent = errorMsg;
        submit.removeAttribute('aria-busy');
        submit.disabled = false;
      }
    } catch (error) {
      console.error('Sales form submission error:', error);
      status.className = 'mt-6 min-h-6 text-sm text-signal';
      status.textContent = '网络错误，请检查连接后重试';
      submit.removeAttribute('aria-busy');
      submit.disabled = false;
    }
  });
}