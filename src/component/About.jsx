import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function About(){
    const {dark} = useContext(ThemeContext);
    
    return (
    <div className="container"
    style={{
        padding:'100px'
    }}>
        <h3
        style={{
            color:`${dark?'white':'black'}`
        }}
        >About</h3>
        <p
        style={{
            color:`${dark?'white':'black'}`
        }}
        >By understanding, imagining and expressing change, we create simpler, lighter, more desirable ideas for the future. We design for life. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <div className="row"
        style={{
            padding: '50px',
            background: `${dark?'black':'aliceblue'}`
        }}>
            <div className="col-12 col-md-6 ">
                <h4
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                    Futurists
                </h4>
                <p
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                </p>
            </div>
            <div className="col-12 col-md-6">
                <h4
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Strategists
                </h4>
                <p
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                </p>
            </div>
            <div className="col-12 col-md-6">
                <h4
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Designers
                </h4>
                <p
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                </p>
            </div>
            <div className="col-12 col-md-6">
                <h4
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Realisers
                </h4>
                <p
                style={{
                    color:`${dark?'white':'black'}`
                }}>
                Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                </p>
            </div>

        </div>
    </div>)
}