import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName":"Jayce",
"lastName":"Hauck",
"userName":"Domen_qwe",
"email":"123"};

    render() {
        return html`
        <style>
        .s1{
            color:blue;
            font-size:100px;
            background:black;
        }
        .s2{
            color:green;
            font-size:200px;
            background:blue;
        }
        .s3{
            color:red;
            font-size:50px;
            background:black;
        }
        </style>
        <h1 class="s1">${this.foo.firstName}</h1>
        <h2 class="s2">${this.foo.lastName}</h2>
        <p class="s3">${this.foo.email}</p>

        `;
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/students')
            .then((response) => response.json())
            .then((bodyRes) => {this.foo=bodyRes});

    }
}
