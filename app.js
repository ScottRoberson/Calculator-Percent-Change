document.getElementById('percentForm').addEventListener('submit', function(e) {
  //Hide Results
  document.getElementById('results').style.display = 'none';
  //Show Loader
  document.getElementById('loading').style.display = 'flex';

  e.preventDefault();

  setTimeout(percentChange, 2000);
});

function percentChange() {
  //UI vars
  const y1 = document.getElementById('y1');
  const y2 = document.getElementById('y2');
  //Calculate Percentage
  const percentage = ((y2.value - y1.value) / y1.value) * 100;
  //Output display
  const total = document.getElementById('total');
  const y1results = document.getElementById('y1results');

  if (isFinite(percentage)) {
    total.appendChild(document.createTextNode(percentage + '%'));
    y1results.appendChild(document.createTextNode(y1.value));
    y2results.appendChild(document.createTextNode(y2.value));
    //Hide Results
    document.getElementById('results').style.display = 'block';
    //Show Loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please enter a value');
  }
}

//Show Error
function showError(error) {
  //Hide Results
  document.getElementById('results').style.display = 'none';
  //Show Loader
  document.getElementById('loading').style.display = 'none';

  //Create div
  const errorDiv = document.createElement('div');
  //Get elements
  const pageHeader = document.querySelector('.page-header');
  const heading = document.querySelector('.heading');

  //Add class to div
  errorDiv.className = 'alert alert-danger';
  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  //Insert error above heading (what to insert, where to insert)
  pageHeader.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
}

//Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}

//.heading
//.page-header
