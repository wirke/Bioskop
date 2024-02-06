<script src="https://www.google.com/recaptcha/api.js?render=6Ld7PWkpAAAAAOl4QifWM3hFj7NeicoLoSpHiKZz"></script>

<script>
   function onClick(e) {
     e.preventDefault();
     grecaptcha.ready(function() {
       grecaptcha.execute('6Ld7PWkpAAAAAOl4QifWM3hFj7NeicoLoSpHiKZz', {action: 'submit'}).then(function(token) {
           // Add your logic to submit to your backend server here.
       });
     });
   }
</script>
