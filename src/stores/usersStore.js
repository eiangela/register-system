    import { defineStore } from 'pinia';
    import { ref, computed } from "vue";
    import { useRouter } from 'vue-router';


    export const useUserDataStore = defineStore('user', {

        state: () => ({
            cpf: "",
            filial: "",
            name: "",
            email: "",
            phone: "",
            childName: "",
            childBirthday: "",
            childList: [],
            router: useRouter()
        }),
        actions: {
            responsible() {
                return [{
                    id: '2',
                    cpf: '32730541829',
                    phone: '994545726',
                    phone_ddd: '11',
                    email: 'daniel.scapulatempo@playcenter.com.br',
                    name: 'Daniel Tadeu Scapulatempo',
                }];
            },

            childrens() {
                return [{
                        uuid: '1a581e72-dd0b-4cbf-98ef-8d64c167b9bd',
                        id: '1',
                        responsible: '2',
                        name: 'Criança 01',
                        birthday: '2001-01-01 00:00:00.000',
                    },
                    {
                        uuid: '172d16ab-019a-4bae-949d-18d2ded60529',
                        id: '2',
                        responsible: '2',
                        name: 'Criança 02',
                        birthday: '2001-01-02 00:00:00.000',
                    },
                    {
                        uuid: '174255b5-4c28-4bd5-aebf-6c16b701e4ab',
                        id: '',
                        responsible: '2',
                        name: 'adsad',
                        birthday: '2002-01-10 00:00:00.000',
                    }
                ];
            },

            validateCpf() {
                this.cpf = this.cpf.replace(/\D/g, "");
            },

            cpfRule(value) {
                const unmasked = value.replace(/\D/g, "");
                if (unmasked && unmasked.length !== 11) {
                    return "CPF inválido";
                }
                return true;
            },

            isFormValid() {
                return this.cpf.length === 11 && this.filial.trim() !== "";
            },

            nextPageParent() {
                this.validateCpf();

                const foundResponsible = this.responsible().find((responsible) => responsible.cpf === this.cpf);
                if (foundResponsible) {
                    this.name = foundResponsible.name;
                    this.email = foundResponsible.email;
                    this.phone = foundResponsible.phone;
                } else {
                    this.name = "";
                    this.email = "";
                    this.phone = "";
                }

                if (this.isFormValid()) {
                    this.router.push({
                        path: "/parent",
                        query: {
                            cpf: this.cpf,
                            name: this.name,
                            email: this.email,
                            phone: this.phone
                        },
                    });
                } else {
                    alert("Preencha todos os campos corretamente");
                }
            },

            nextPageChild() {
                if (this.name && this.email && this.phone.trim() !== "") {
                    this.router.push({
                        path: "/childs",
                    })

                } else {
                    alert('Por favor, preencha todos os campos do formulário.');
                }
            },

            addChild() {
                // Verifica se o nome da criança não está vazio e se a data de nascimento foi preenchida
                if (this.childName.trim() !== "" && this.childBirthday) {
                    const novaCrianca = {
                        name: this.childName,
                        birthday: this.childBirthday,
                    };

                    // Adiciona a nova criança à lista de crianças
                    this.childList.push(novaCrianca);

                    // Limpa os campos após adicionar a criança à lista
                    this.childName = "";
                    this.childBirthday = "";
                } else {
                    alert('Por favor, preencha todos os campos do formulário.');
                }
            },
            
            removeChild(index) {
                //Removendo a criança 
                this.childList.splice(index, 1);
            },

            nextFinished() {
                if (this.childList.length > 0) {
                    this.router.push({
                        path: "/finished",
                    });
                } else {
                    alert('Por favor, adicione uma criança.');
                }
            },
            
            newRegister() {
                // Redefine os campos do formulário para seus valores iniciais ou vazios
                this.cpf = "";
                this.filial = "";
                this.name = "";
                this.email = "";
                this.phone = "";
                this.childName = "";
                this.childBirthday = "";
                this.childList = [];
          
                // Navega para a página inicial
                this.router.push({
                  path: "/",
                });
            },
        },
    });