
import swal from '@sweetalert/with-react';


class AlertsManager {
  static showActionFailed = (customMsg) => new Promise(resolve => {
    swal('Erro', customMsg || 'Erro interno no servidor!', 'error')
      .then(resolve)
      .catch(resolve);
  })

  static showActionSucceeded = (customMsg) => new Promise(resolve => {
    swal('Sucesso', customMsg || 'Operação realizada com sucesso!', 'success')
      .then(resolve);
  })

  static showRemotionConfirm = (name) => new Promise((resolve, reject) => {
    swal({
      title: 'Deletar Contato',
      text: `Deseja deletar o contato de [${name}]?`,
      buttons: {
        cancel: 'Cancelar',
        danger: 'Deletar'
      }
    }).then(confirmed => {
      confirmed ? resolve() : reject();
    }).catch(reject);
  })
}


export default AlertsManager;

