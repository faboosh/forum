import UserKit from './UserKit';
import PostKit from './PostKit';

const login = {
    email: {
        name: 'email',
        type: 'email',
        required: true,
        placeholder: 'E-mail',
        margin: "0 0 m 0",
    },
    password: {
        name: 'password',
        type: 'password',
        required: true,
        placeholder: 'Password',
        margin: "0 0 m 0",
    }
}

const reply = {
    title: {
        name: 'title',
        type: 'text',
        required: true,
        placeholder: 'Title',
        margin: "0 0 m 0",
    },
    content: {
        name: 'content',
        type: 'textarea',
        required: true,
        placeholder: 'Aa...',
        minHeight: '120px',
        margin: "0 0 m 0",
    }
}

const register = {
    email: {
        type:'text',
        name: 'email',
        placeholder: 'E-mail',
        required: true,
        margin: '0 0 m 0'
    },
    firstName: {
        type:'text',
        name: 'firstName',
        placeholder: 'First Name',
        required: true,
        margin: '0 0 m 0',
        width: 'calc(50% - 7.5px)',
    },
    lastName: {
        type:'text',
        name: 'lastName',
        placeholder: 'Last Name',
        required: true,
        margin: '0 0 m 0',
        width: 'calc(50% - 7.5px)',
    },
    password: {
        type:'text',
        name: 'password',
        placeholder: 'Password',
        required: true,
        margin: '0 0 m 0'
    },
    country: {
        type:'select',
        name: 'country',
        placeholder: 'Country',
        required: true,
        margin: '0',
        options: () => new Promise(resolve => {
            UserKit.countries()
            .then(res => res.json())
            .then(data => {
                let formatted = data.results.map(country => {
                    return {
                        value: country.id,
                        label: country.title,
                    }
                })

                resolve(formatted);
            })
        })
    }

}

const createPost = {
    title: {
        name: 'title',
        type: 'text',
        required: true,
        placeholder: 'Title',
        margin: "0 0 m 0",
    },
    content: {
        name: 'content',
        type: 'textarea',
        required: true,
        placeholder: 'Aa...',
        minHeight: '120px',
        margin: "0 0 m 0",
    },
    category: {
        type:'select',
        name: 'category',
        placeholder: 'Category',
        required: true,
        margin: "0 0 m 0",
        options: () => new Promise(resolve => {
            PostKit.categoryList()
            .then(res => res.json())
            .then(data => {
                console.log('Categories: ',data)
                let formatted = data.results.map(country => {
                    return {
                        value: country.id,
                        label: country.title,
                    }
                })

                resolve(formatted);
            })
        })
    }

}

const forms = { login, register, reply, createPost };

export default class FormBuilder {
    constructor(name) {
        this.name = name;
        this.form = {...forms[this.name]};
        if(!this.form) throw new Error('Form does not exist');
    }

    async fields() {
        return new Promise(async resolve => {

            let fields = Object.keys(this.form);

            for(let field = 0; field < fields.length; field++) {
                console.log(this.form[fields[field]]);

                let props = Object.keys(this.form[fields[field]]);

                for(let prop = 0; prop < props.length; prop++) {

                    if(typeof this.form[fields[field]][props[prop]] == 'function') {
                        this.form[fields[field]][props[prop]] = await this.form[fields[field]][props[prop]]();
                    }

                }

            }

            console.log(this.form)
            resolve(this.form);
        })
    }

    empty() {
        const empty = {}

        Object.keys(this.form).forEach(field => {
            empty[field] = "";
        })

        return empty;
    }
}