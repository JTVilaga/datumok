document.getElementById('datum').addEventListener('change', e => {
  const nap = dayjs(e.target.value).diff(dayjs(), 'day');
  document.getElementById('eredmeny').textContent = nap + ' nap';
});
