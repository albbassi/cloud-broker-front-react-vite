/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function Titulo(props){

/* Função para renderizar o titulo do datagrid baseado na api chamada pelo usuário

*/
     
    const apiChamada = props.apiChamada;
    const cnpj = props.cnpj;
    const nr_contrato = props.nrContrato;

    if (apiChamada === 'clientes'){
        return (<h1 style={{color:'blue', 
                    textAlign:'center' }}> 
                    Clientes Cadastrados
                </h1>)
    
    } else if (apiChamada === 'filtra-contratos') {
        return (
                   <h1 style={{color:'blue', 
                    textAlign:'center' }} > 
                    Contratos do CNPJ: {cnpj} 
                </h1>)    
    
    } else if (apiChamada === 'filtra-itens') {
        return (
            <div>
                <h1 style={{color:'blue', 
                    textAlign:'center' }} > 
                    Número do Contrato: {nr_contrato} 
                </h1>
                <h4 style={{color:'blue', 
                    textAlign:'center'}}>Itens Contratados </h4> 
             </div>
                )    
    }

    Titulo.propTypes = {
        data: PropTypes.object
      };
}