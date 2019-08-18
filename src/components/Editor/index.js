import React from 'react';
import './index.css';
import Input from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-latex';
import '../../styles/prism.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: '%sl,jdflsdfm .,%\n' +
                '$asdkflksdmf$\n' +
                '\\begin{document}\n' +
                '\\end{document}\n' +
                '$\\pi r^2$'};

    }
    render() {
        return (
            <div className='editor'>
                    <Input
                        className='input'
                        value={this.state.code}
                        onValueChange={code => this.setState({ code })}
                        highlight={code => highlight(code, languages.latex, 'latex')}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }}
                    />
            </div>
        );
    }
}

export default Editor;
