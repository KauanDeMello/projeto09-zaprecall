import { useState } from 'react';
import Icon from './common/Icon';

function CardQuestion({ question, answer, zapCard, index, tapCard }) {
    const [zap, setZap] = useState(false);

    return (
        <div className="flashcard aberto">
            {!zap ? question : answer}
            {!zap ? (
                <div onClick={() => setZap(true)}>
                    <Icon type="setinha" />
                </div>
            ) : (
                <div>
                    <div
                        className="button error"
                        onClick={() => {
                            zapCard(index, 'erro');
                            tapCard(index, false, 'erro');
                        }}
                    >
                        Não lembrei!
                    </div>
                    <div
                        className="button almost"
                        onClick={() => {
                            zapCard(index, 'help');
                            tapCard(index, false, 'help');
                        }}
                    >
                        Quase não lembrei!
                    </div>
                    <div
                        className="button zap"
                        onClick={() => {
                            zapCard(index, 'acerto');
                            tapCard(index, false, 'acerto');
                        }}
                    >
                        Zap!
                    </div>
                </div>
            )}
        </div>
    );
}

function Card({ setTapped, index, tapCard, status }) {
    return (
        <div
            className={`flashcard ${status}`}
            onClick={() => {
                if (status) return;
                tapCard(index);
            }}
        >
            {`Pergunta ${index + 1}`}
            <Icon type={status} />
        </div>
    );
}

export default function Flashcard({
    index,
    question,
    tap,
    tapCard,
    answer,
    zapCard,
    status,
}) {
    const [tapped, setTapped] = useState(tap);

    return (
        <>
            {!tap ? (
                <Card
                    setTapped={setTapped}
                    index={index}
                    tapCard={tapCard}
                    status={status}
                />
            ) : (
                <CardQuestion
                    question={question}
                    answer={answer}
                    zapCard={zapCard}
                    index={index}
                    tapCard={tapCard}
                />
            )}
        </>
    );
}