import './Quest_component.css';
import { Progress } from '@chakra-ui/react';

interface Quest_Props {
    questtext: string;
    progressvalue: number;
}

const Quest: React.FC<Quest_Props> = ({ questtext, progressvalue }) => {
    return (
        <div className="QuestContainer">
            <ul className="Questlist">
                <li>{questtext}</li>
            </ul>
            <div className="ProgressWrapper">
                <div className="ProgressLabels">
                    <span>0%</span>
                    <span>100%</span>
                </div>
                <Progress 
                    value={progressvalue}
                    width="30vw" 
                    height="2vh"  
                    backgroundColor="white"
                    sx={{
                        '& > div': {
                            backgroundColor: '#F4853B',  // 進捗部分の色を指定
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Quest;