<select id="signupCountry">
  <option value="">Select Country</option>
</select>

<script>
const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola",
  "Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Belgium","Brazil",
  "Canada","China","France","Germany","India",
  "Iran","Italy","Japan","United Kingdom","United States","Vietnam"
];

const countrySelect = document.getElementById('signupCountry');
countries.forEach(c => {
  const option = document.createElement('option');
  option.value = c;
  option.textContent = c;
  countrySelect.appendChild(option);
});
</script>
