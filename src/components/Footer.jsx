import React from "react";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo} from 'react-icons/rx';

import './footer.css'

export default function Footer() {
    return (
        <div>
           
            <footer>
                <a href="https://www.linkedin.com/in/jonathan-cortoppassi-83193323a/" target="_blank" rel="noopener noreferrer">
                    <RxLinkedinLogo/>
                </a>
                <a href="https://www.instagram.com/john_cortoppassi/" target="_blank" rel="noopener noreferrer">
                    <RxInstagramLogo/>
                </a>
                <a href="https://github.com/cortoppassi" target="_blank" rel="noopener noreferrer">
                    <RxGithubLogo/>
                </a>
            </footer>
        </div>
    );
};

// O atributo rel="noopener noreferrer" é usado em conjunto com o atributo target="_blank" em links HTML para melhorar a segurança e evitar possíveis vulnerabilidades.