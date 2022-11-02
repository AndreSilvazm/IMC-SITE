import React from 'react';

function Name_Page() {
    return (
                <div class="modal modal-sheet position-static d-block py-5" tabindex="-1" role="dialog" id="modalSheet">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                    <div class="modal-header border-bottom-0">
                        <h1 class="modal-title fs-5">Nos informe seu nome</h1>
                    </div>
                    <div class="modal-body py-0">
                        <p>
                            Nos informe como você gostaria de ser chamado(a).
                        </p>
                    </div>
                    <div class="modal-footer flex-column border-top-0">
                        <button type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2">Salvar</button>
                    </div>
                    </div>
                </div>
                </div>
        
    );
}

export default Name_Page;