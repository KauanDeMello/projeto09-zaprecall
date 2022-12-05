import { ReactComponent as Erro } from '../../assets/img/close-circle-icon.svg';
import { ReactComponent as Acerto } from '../../assets/img/checkmark-circle-icon.svg';
import { ReactComponent as Duvida } from '../../assets/img/help-circle-icon.svg';
import setinha from '../../assets/img/setinha.png';

export default function Icon({ type }) {
  switch (type) {
    case 'help':
      return <Duvida className="icone" fill="#FF922E" />;
    case 'erro':
      return <Erro className="icone" fill="#FF3030" />;
    case 'acerto':
      return <Acerto className="icone" fill="#2FBE34" />;
    case 'setinha':
      return <img className="icone" src={setinha} alt="icone" />;
    default:
      return <ion-icon className="icone" name="play-outline"></ion-icon>;
  }
}