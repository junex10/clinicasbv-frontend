import { SweetAlertOptions } from 'sweetalert2';
import { Colors } from 'src/app/helpers';

class SwalAlerts {

    swalErrorLocation = (
        title: string = 'Error de ubicación',
        text: string = 'No se pudo obtener la ubicación actual, verifique su conexión o permita a la aplicación conocer su ubicación',
        icon: string = '<i class="fas fa-map-marker-alt iconBorder"></i>',
        html: string = `
        <div>
            <div class="iconSwal">${icon}</div><hr>
            <h4 class='text-center'>${title}</h4>
            <p style='font-size: 18px;' class='mt-4'>${text}</p>
        </div>`
    ): SweetAlertOptions => ({
        html,
        showCancelButton: false,
        showConfirmButton: false
    })
    
    swalAuthAction = (
        title: string = '¿Desea confirmar esta acción?',
        confirmButtonText: string = 'Si',
        cancelButtonText: string = 'No'
    ): SweetAlertOptions => ({
        title,
        showConfirmButton: true,
        confirmButtonText: confirmButtonText,
        showCancelButton: true,
        cancelButtonText: cancelButtonText,
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        }
    });

    swalSuccess = (
        title: string = 'Acción completada',
        text: string = 'La acción se ha completado correctamente'
    ): SweetAlertOptions => ({
        title,
        text,
        showConfirmButton: true,
        confirmButtonText: 'Entendido',
        customClass: {
            confirmButton: 'btn btn-success'
        }
    })
}
export default new SwalAlerts();