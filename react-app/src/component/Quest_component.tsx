import './Quest_component.css';
interface Quest_Props{
    questtext: string;

}
const Quest : React.FC<Quest_Props> =({questtext}) =>{
    return(
        <div>
            <ul typeof="disc" className='Questlist'>
                <li>{questtext}</li>
                
            </ul>

        </div>
    );
}
export default Quest;