<!DOCTYPE html>
<html>
<body>
<div class="container">
  <form>
    <div class="base">
      <div class="enter">
      <h1>Age Calculator</h1>
    </div>
  <div class="block">
    <p class="title">Date</p>
    <input type="text" name="date" id="date" placeholder="DD" required="required" minlength="1" maxlength="2" />
  </div>
  <div class="block">
    <p class="title">Month</p>
    <input type="text" name="month" id="month" placeholder="MM" required="required"  />
  </div>
  <div class="block">
    <p class="title">Year</p>
    <input type="text" name="year" id="year" placeholder="YYYY" required="required" minlength="4" maxlength="4" />
  </div>
  </div>
  <div class="base">
    <div class="enter">
    <input type="button" name="submit" value="Submit" onclick="age()" />
    </div>
  </div>
    <div id="age"></div>
  </form>
 <script type="text/javascript">
  function age() {
  let  d1 = document.getElementById('date').value;
  let  m1 = document.getElementById('month').value;
  let  y1 = document.getElementById('year').value;

  let  date = new Date();
  let  d2 = date.getDate();
  let  m2 = 1 + date.getMonth();
 let  y2 = date.getFullYear();
 let  month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let  d = d2 - d1;
 let  m = m2 - m1;
  let  y = y2 - y1;

  document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}
</script>
</div>
</body>
</html>

