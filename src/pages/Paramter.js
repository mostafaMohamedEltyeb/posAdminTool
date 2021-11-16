import React from 'react'

function Paramter() {
  let state = false;
  function handleClick (value) {
    if (value ==="SYSTEM"){
      state = true
    }
  }
  return (
    <div className='container'>
      <form id="parmeterId" class="row g-3">
        <div class="col-md-12">
          <label for="inputKey4" class="form-label">Key</label>
          <input type="text" class="form-control" id="inputKey4" />
        </div>
        <div class="col-md-4">
          <label for="inputType" class="form-label">Type</label>
          <select onChange={handleClick()} id="inputType" class="form-select">
            <option selected>Select...</option>
            <option value="MANDATORY">MANDATORY</option>
            <option value="SYSTEM">SYSTEM</option>
            <option value="USER">USER</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="systemType" class="form-label">System Type</label>
          <input type="text" class="form-control" id="inputsystemType" />
        </div>

        <div class="col-md-4">
          <label for="inputFormat" class="form-label">Format</label>
          <select id="inputFormat" class="form-select">
            <option selected>Select...</option>
            <option value="REGEX">REGEX</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputDataSource" class="form-label">Data Source</label>
          <select id="inputDataSource" class="form-select">
            <option selected>Select...</option>
            <option value="CUSTOMER_DATA">Customer Data</option>
            <option value="SYSTEM_DATA">System Data</option>
          </select>
        </div>

        <div class="col-md-3">
            {state ? 
            <>
          <label for="inputDataSource" class="form-label">System Type</label>
          <select id="inputDataSource" class="form-select">
            <option>Select...</option>
            <option value="MSISDN">MSISDN</option>
            <option value="NATIONAL_ID">NATIONAL_ID</option>
            <option value="STORE_NAME">STORE_NAME</option>
            <option value="STORE_ID">STORE_ID</option>
            <option value="LANDLINE">LANDLINE</option>
          </select> 
            </>
          :
          <option></option>
}
        </div>

        <div class="col-12">
          <button id="saveButtonId" type="button" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Paramter
