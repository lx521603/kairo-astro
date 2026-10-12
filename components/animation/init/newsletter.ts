import { $, $$ } from '@/utils/dom';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// 🌟 你的 Formspree 专属 Endpoint
const FORMSPREE_URL = 'https://formspree.io/f/xaeqdppp';

export default function init() {
  $$<HTMLFormElement>('[data-newsletter]').forEach((form) => {
    const field = $('[data-newsletter-field]', form);
    const input = $<HTMLInputElement>('input', form);
    const submit = $<HTMLButtonElement>('[data-newsletter-submit]', form);
    const status = $('[data-newsletter-status]', form);
    if (!field || !input || !submit || !status) return;
    const idle = status.textContent ?? '';

    const setState = (state: 'idle' | 'error' | 'loading' | 'success', message: string) => {
      field.dataset.state = state;
      status.textContent = message;
      status.classList.toggle('text-signal', state === 'error');
      status.classList.toggle('text-bone', state === 'success');
      submit.disabled = state === 'loading' || state === 'success';
      submit.setAttribute('aria-busy', String(state === 'loading'));
      input.setAttribute('aria-invalid', String(state === 'error'));
    };

    input.addEventListener('input', () => {
      if (field.dataset.state === 'error') setState('idle', idle);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const emailValue = input.value.trim();
      if (!EMAIL.test(emailValue)) {
        setState('error', form.dataset.msgError ?? '请输入有效的邮箱地址');
        input.focus();
        return;
      }

      // 1. 进入加载状态
      setState('loading', form.dataset.msgLoading ?? '正在提交...');

      try {
        // 2. 真实发起 Formspree AJAX 请求
        const response = await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ 
            email: emailValue,
            _subject: 'Dopi 官网 - 新订阅者' // 你收到邮件时的标题
          })
        });

        if (response.ok) {
          // 3. 提交成功
          setState('success', form.dataset.msgSuccess ?? '订阅成功！感谢关注 Dopi。');
          
          // 触发模板原有的特效动画
          form.closest('footer')?.querySelector('[data-signal-line]')?.dispatchEvent(new CustomEvent('signal:pulse'));
          
          // 清空并禁用输入框，防止重复提交
          input.value = '';
          input.disabled = true;
        } else {
          // 4. 服务器返回错误 (例如邮箱格式被 Formspree 拒绝)
          const data = await response.json();
          setState('error', data.errors ? data.errors[0].description : '提交失败，请稍后再试');
          input.focus();
        }
      } catch (error) {
        // 5. 网络错误
        console.error('Newsletter submission error:', error);
        setState('error', '网络错误，请检查连接后重试');
        input.focus();
      }
    });
  });
}