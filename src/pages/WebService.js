import React from 'react'

function WebService({ webServices }) {

    return (
        <div className='container'>
            <form id="webServiceId" class="row g-3">
                <div class="col-md-6">
                    <label for="inputName4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName4" required />
                </div>

                <div class="col-12">
                    <label for="inputUrl" class="form-label">URL</label>
                    <input type="text" class="form-control" id="inputUrl" required />
                </div>
                <div class="col-md-3">
                    <label for="decriptionKey" class="form-label">Description Key</label>
                    <input type="text" class="form-control" id="inputDecriptionKey" required />
                </div>
                <div class="col-md-3">
                    <label for="inputStatusCode" class="form-label">Status Key</label>
                    <input type="text" class="form-control" id="StatusKey" required />
                </div>
                <div class="col-md-3">
                    <label for="inputMethod" class="form-label">METHOD</label>
                    <select id="inputMethod" class="form-select" required>
                        <option selected>Select...</option>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="inputHttps" class="form-label">HTTPS</label>
                    <select id="inputHttps" class="form-select" required>
                        <option selected>Select...</option>
                        <option value="1">TRUE</option>
                        <option value="0">FALSE</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="inputAcceptType" class="form-label">Accept Type</label>
                    <select id="inputAcceptType" class="form-select" required>
                        <option selected>Select...</option>
                        <option value="XML">XML</option>
                        <option value="JSON">JSON</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="inputStatusSuccessValue" class="form-label">Status Success Value</label>
                    <select id="inputStatusSuccessValue" class="form-select" required>
                        <option selected>Select...</option>
                        <option value="1">TRUE</option>
                        <option value="0">FALSE</option>
                    </select>
                </div>
                <div class="col-12">
                    <button id="saveButtonId" type="button" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
}

export default WebService
