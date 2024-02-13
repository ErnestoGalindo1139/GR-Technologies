import { Component } from 'react';

export class TypingEffect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            phrases: ['GRS Technologies', 'Creativity', 'Innovation', 'Exito', 'Solutions'],
            currentPhraseIndex: 0,
        };
    }

    componentDidMount() {
        this.typeText();
    }

    typeText = () => {
        const { phrases, currentPhraseIndex } = this.state;
        const currentPhrase = phrases[currentPhraseIndex];
        let index = 0;

        const typingInterval = setInterval(() => {
            this.setState({ text: currentPhrase.substring(0, index) });
            index++;

            if (index > currentPhrase.length) {
                clearInterval(typingInterval);

                // Espera un tiempo antes de iniciar la eliminación del texto
                setTimeout(() => this.eraseText(), 500);
            }
        }, 100); // Ajusta el intervalo según tus preferencias
    };

    eraseText = () => {
        const { phrases, currentPhraseIndex } = this.state;
        const currentPhrase = phrases[currentPhraseIndex];
        let index = currentPhrase.length;

        const erasingInterval = setInterval(() => {
            this.setState({ text: currentPhrase.substring(0, index) });
            index--;

            if (index < 0) {
                clearInterval(erasingInterval);

                // Cambia a la siguiente frase después de borrar el texto
                this.setState(
                (prevState) => ({
                    currentPhraseIndex: (prevState.currentPhraseIndex + 1) % phrases.length,
                }),
                () => {
                    // Espera un tiempo antes de iniciar la escritura de la siguiente frase
                    setTimeout(() => this.typeText(), 500);
                }
                );
            }
        }, 100); // Ajusta el intervalo según tus preferencias
    };

    render() {
        return (
            <div className="typing-effect">
                <h2 className='text-white text-[1.7rem] sm:text-[3rem] colorTextBanner typing-text'>{this.state.text}</h2>
            </div>
        );
    }
}
