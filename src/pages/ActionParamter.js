import React from 'react'

function ActionParamter({parameters ,actions }) {
    return (
        <div className='container'>
        <form id="actionParmeterId" class="row g-3">
           
            <div class="col-md-6">
                <label for="inputParameter" class="form-label">Parameter</label>
                <select id="inputParameter" class="form-select">
                    <option selected>Select...</option>
                    {parameters && parameters.map((e) => <option value={e.id}>{e.key}</option>)}

                </select>
            </div>
            <div class="col-md-6">
                <label for="inputActions" class="form-label">Actions</label>
                <select id="inputActions" class="form-select">
                    <option selected>Select...</option>
                    {actions && actions.map((e) => <option value={e.id}>{e.sku}</option>)}

                </select>
            </div>

            <div class="col-md-4">
                    <label for="inputSku" class="form-label">Value</label>
                    <input type="text" class="form-control" id="inputValue" />
                </div>

            <div class="col-12">
                <button id="saveButtonId" type="button" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
    );
}

export default ActionParamter
