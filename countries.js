<script>
const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Argentina","Australia","Austria",
  "Azerbaijan","Bahrain","Bangladesh","Belgium","Brazil","Canada",
  "China","Denmark","Egypt","Finland","France","Germany","India",
  "Indonesia","Iran","Iraq","Ireland","Italy","Japan","Jordan",
  "Kuwait","Lebanon","Malaysia","Netherlands","Norway","Oman",
  "Pakistan","Qatar","Russia","Saudi Arabia","South Africa","Spain",
  "Sweden","Switzerland","Turkey","UAE","UK","USA","Yemen"
];

function fillCountrySelect(selectId){
  const sel=document.getElementById(selectId);
  sel.innerHTML='<option value="">Select Country</option>';
  COUNTRIES.forEach(c=>{
    sel.innerHTML+=`<option value="${c}">${c}</option>`;
  });
}
</script>
