import React from 'react'

function Action({ webServices }) {
    return (
        <div className='container'>
            <form id="actionId" class="row g-3">
                <div class="col-md-4">
                    <label for="inputSku4" class="form-label">SKU</label>
                    <input type="text" class="form-control" id="inputSku4" required/>
                </div>

                <div class="col-md-12">
                    <label for="inputWebService" class="form-label">Web Service</label>
                    <select id="inputWebService" class="form-select">
                        <option selected>Select...</option>
                        {webServices && webServices.map((e) => <option value={e}>{e.name}</option>)}

                    </select>
                </div>
                <div class="col-md-3">
                    <label for="inputExcutionLevel" class="form-label">Excution Level</label>
                    <select id="inputExcutionLevel" class="form-select">
                        <option selected>Select...</option>
                        <option value="CART">Cart</option>
                        <option value="CHECKOUT">Checkout</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <label for="inputTransactionType" class="form-label">Transaction Type</label>
                    <select id="inputTransactionType" class="form-select">
                        <option selected>Select...</option>
                        <option value="SALE">Sale</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <label for="inputPriority" class="form-label">Priority</label>
                    <select id="inputPriority" class="form-select">
                        <option selected>Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>


                <div class="col-md-3">
                    <label for="inputStatus" class="form-label">Status</label>
                    <select id="inputStatus" class="form-select">
                        <option selected>Select...</option>
                        <option value="ACTIVE">Active</option>
                    </select>
                </div>

                <div class="col-12">
                    <button id="saveButtonId" type="button" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
}

export default Action
