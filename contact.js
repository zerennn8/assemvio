document.getElementById('demo-form').addEventListener('submit',event=>{
  event.preventDefault();
  event.stopImmediatePropagation();
  const data=new FormData(event.currentTarget);
  const body=`Hello Assemvio,\n\nI'd like to explore a factory demo.\n\nName: ${data.get('name')}\nWork email: ${data.get('email')}\nCompany: ${data.get('company')}\n\nAssembly challenge:\n${data.get('process')}\n`;
  window.location.href='mailto:olympicdang08@gmail.com?subject='+encodeURIComponent('Assemvio factory demo — '+data.get('company'))+'&body='+encodeURIComponent(body);
  document.getElementById('form-status').textContent='Review and send the request in your email app. If it does not open, email olympicdang08@gmail.com.';
},true);
