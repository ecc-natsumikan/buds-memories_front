import './Tag_component.css';
interface TagProps{
    text:string;
}
const Tag : React.FC<TagProps> =({text}) =>{
    return(
        <div className="tag">
            {text}
        </div>
    );
}
export default Tag;