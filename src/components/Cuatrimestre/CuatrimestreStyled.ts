import styled from 'styled-components'

export const DivParentContainer = styled.div.attrs({ className: 'border' })`
   display:flex;
   flex-flow: row wrap;
   padding: 10px;
   height: 320px;
   align-content: space-between;
   > *{
      margin: 5px 0px;
   }

   @media (min-width: 0px) {
      margin: 30px 0px;
      > *{
         width: 100%;
      font-size:12px;
   }
     
   };
   @media (min-width: 1058px) { 
      * {
         font-size: 14px;
      }
      margin: 30px 20px;
      width: 400px;
   };
   
`

export const SelectMateria = styled.select.attrs({ className: '' })`
   outline:none;
   padding: 10px 0px;
   width: 190px;
`

export const InputCalificacion = styled.input.attrs({ type: 'number', className: 'form-control' })`
   display:inline-block;
   width: 60px;
   padding: 6px;
`
export const Button = styled.button`
   outline: none;
   background-color: ${({ bgColor }: { bgColor?: string }) => bgColor || '#569C11'};
   color: white;
   border: 0px;
   padding: 5px 20px;
   box-shadow: 0px 0px 4px 0.5px grey;
   

`

export const BotonCerrarMateria = styled(Button).attrs({
   className: 'cerrar badge    '
})`
   background-color: red;
   text-align: center;
   position: absolute;
   top: calc(50% - 10px);
   right: 0px;
   padding: 5px;
   font-size: medium;
   display:none;
   
`
export const BotonCerrarCuatrimestre = styled(Button)`
   background-color: red;
   margin-left: 10px;
`

export const DivTituloContainer = styled.div`
   display:flex;
   justify-content: space-between;
   width: 100%;
   
   
   > label{
      font-weight: bold;
      font-size:larger;
   }
   

`
export const TrMateriaPadre = styled.tr.attrs({ className: '' })`
   :hover{
      .cerrar{
      display: inline-block;
      }
    }
`

export const TableMaterias = styled.table`
   padding: 10px;
   display:block;
   box-sizing: border-box;

   td{
      padding: 0px 3px;
   }
   
   *{
      margin: 2px 0px;
   }
`
export const DivTable = styled.div`
   margin-top: 10px;
   border-top: 2px solid #B5B5B5;
   border-bottom: 2px solid #B5B5B5;
   overflow-y: scroll;
   height: 190px;
`
export const LabelPromedioCuatrimestral = styled.label`
   background-color: #F09C0B;
   color: white ;
   padding: 7px;
   border-radius: 5px;
   width: 93%;
   text-align: center;
   font-weight: 400;
   box-shadow: 0px 0px 4px 0.5px grey;
`

