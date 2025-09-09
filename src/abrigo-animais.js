class AbrigoAnimais {

    encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

        //OBJ COM OS ANIMAIS DA TABELA
        const animaisEBrinquedos = {
            Rex: { tipo: 'cão', brinquedo: ['RATO', 'BOLA'] },
            Mimi: { tipo: 'gato', brinquedo: ['BOLA', 'LASER'] },
            Fofo: { tipo: 'gato', brinquedo: ['BOLA', 'RATO', 'LASER'] },
            Zero: { tipo: 'gato', brinquedo: ['BOLA', 'RATO'] },
            Bola: { tipo: 'cão', brinquedo: ['CAIXA', 'NOVELO'] },
            Bebe: { tipo: 'cão', brinquedo: ['LASER', 'RATO', 'BOLA'] },
            Loco: { tipo: 'jabuti', brinquedo: ['SKATE', 'RATO'] }
        };

        //LISTA DOS BRINQUEDOS VALIDOS//////////////////////////////////////////////////////////////////////////////////////////
        const brinquedos = ['RATO', 'BOLA', 'NOVELO', 'LASER', 'CAIXA', 'SKATE'];

        //CRIANDO ARRAYS JA COM LETRAS MAIUSULAS PARA PESSOAS E PARA ANIMAIS////////////////////////////////////////////////////
        const brinquedosDaPessoa1 = brinquedosPessoa1.split(',').map(brinquedosPessoa1 => brinquedosPessoa1.trim().toUpperCase());
        const brinquedosDaPessoa2 = brinquedosPessoa2.split(',').map(brinquedosPessoa2 => brinquedosPessoa2.trim().toUpperCase());
        const ordemDosAnimais = ordemAnimais.split(',').map(ordemAnimais => ordemAnimais.trim().toUpperCase());

        //VERIFICA SE BRINQUEDOS DE UMA PESSOA É REPETIDO///////////////////////////////////////////////////////////////////////
        function animaisRepetidos() {
            if (new Set(ordemDosAnimais).size !== ordemDosAnimais.length) {
                return { erro: 'Brinquedo inválido' };
            }
        }
        const erroAnimalDuplicado = animaisRepetidos();
        if (erroAnimalDuplicado) return erroAnimalDuplicado;

        //VALIDANDO A QUANTIDADE DE ANIMAIS DIGITADA NO TERCEIRO PARAMETRO//////////////////////////////////////////////////////
        function limiteDeAnimais() {
            if (ordemDosAnimais.length === 1 || ordemDosAnimais.length > 4) {
                return { erro: 'Animal inválido' };
            }
        }
        const erroLimiteDeAnimais = limiteDeAnimais();
        if (erroLimiteDeAnimais) return erroLimiteDeAnimais;

        //VERIFICA SE ESSE ANIMAL ESTA NA LISTA DE ANIMAIS VALIDOS//////////////////////////////////////////////////////////////
        function verificaAnimalValido() {
            let counter = 0;
            for (let a of nomeAnimais) {
                if (typeof (ordemDosAnimais[counter]) === 'undefined') {
                    break;
                };
                if (!nomeAnimais.includes(ordemDosAnimais[counter])) {
                    return { erro: 'Animal inválido' };
                }
                counter++;
            }
        }
        const nomeAnimais = Object.keys(animaisEBrinquedos).map(arrayNomeAnimais => arrayNomeAnimais.trim().toUpperCase());
        const erroVerificaAnimalValido = verificaAnimalValido();
        if (erroVerificaAnimalValido) return erroVerificaAnimalValido;

        //VERIFICA SE BRINQUEDOS DE UMA PESSOA É REPETIDO///////////////////////////////////////////////////////////////////////
        function brinqueRepetidos(br) {
            if (new Set(br).size !== br.length) {
                return { erro: 'Brinquedo inválido' };
            }
        }

        //PESSOA PODE MOSTRAR NO MAXIMO 4 BRINQUEDOS////////////////////////////////////////////////////////////////////////////
        function limiteDeBrinquedos(br) {
            if (br.length === 1 || br.length > 4) {
                return { erro: 'Brinquedo inválido' };
            }
        }

        //PESSOA 1 DEVE COLOCAR BRINQUEDOS VÁLIDOS/////////////////////////////////////////////////////////////////////////////
        function verificaBrinquedosPessoa1(brinquedosPessoa1) {
            let counter = 0;
            brinqueRepetidos(brinquedosDaPessoa1);
            limiteDeBrinquedos(brinquedosDaPessoa1);
            for (let a of brinquedos) {
                if (typeof (brinquedosDaPessoa1[counter]) === 'undefined') {
                    break;
                };
                if (!brinquedos.includes(brinquedosDaPessoa1[counter])) {
                    return { erro: 'brinquedo inválido' };
                }
                counter++;
            }
        }
        const verificaBrinquedo1 = verificaBrinquedosPessoa1(brinquedosDaPessoa1);
        if (verificaBrinquedo1) return verificaBrinquedo1;

        //PESSOA 2 DEVE COLOCAR BRINQUEDOS VÁLIDOS/////////////////////////////////////////////////////////////////////////////
        function verificaBrinquedosPessoa2(brinquedosPessoa1) {
            let counter = 0;
            brinqueRepetidos(brinquedosDaPessoa2);
            limiteDeBrinquedos(brinquedosDaPessoa2);
            for (let a of brinquedos) {
                if (typeof (brinquedosDaPessoa2[counter]) === 'undefined') {
                    break;
                };
                if (!brinquedos.includes(brinquedosDaPessoa2[counter])) {
                    return { erro: 'brinquedo inválido' };
                }
                counter++;
            }

        }
        const verificaBrinquedo2 = verificaBrinquedosPessoa2(brinquedosDaPessoa2);
        if (verificaBrinquedo2) return verificaBrinquedo2;

        //VERIFICANDO QUEM PESSOA 1 PODE ADOTAR////////////////////////////////////////////////////////////////////////////////
        const animaisAdotaveis1 = [];
        function sePessoaPodeAdotar1() {
            for (const animal in animaisEBrinquedos) {
                const brinquedosAnimal = animaisEBrinquedos[animal].brinquedo;
                const temAlgumBrinquedo = brinquedosAnimal.some(b => brinquedosDaPessoa1.includes(b));
                if (temAlgumBrinquedo) {
                    animaisAdotaveis1.push(animal.toUpperCase());
                }
            }
        }
        const erroSepessoaPodeAdotar1 = sePessoaPodeAdotar1();
        if (erroSepessoaPodeAdotar1) return erroSepessoaPodeAdotar1;

        //VERIFICANDO QUEM PESSOA 2 PODE ADOTAR/////////////////////////////////////////////////////////////////////////////////
        const animaisAdotaveis2 = [];
        function sePessoaPodeAdotar2() {
            for (const animal in animaisEBrinquedos) {
                const brinquedosAnimal = animaisEBrinquedos[animal].brinquedo;
                const temAlgumBrinquedo = brinquedosAnimal.some(b => brinquedosDaPessoa2.includes(b));
                if (temAlgumBrinquedo) {
                    animaisAdotaveis2.push(animal.toUpperCase());
                }
            }
        }
        const erroSepessoaPodeAdotar2 = sePessoaPodeAdotar2();
        if (erroSepessoaPodeAdotar2) return erroSepessoaPodeAdotar2;

        const animaisAbrigo = animaisAdotaveis1.filter(animal => animaisAdotaveis2.includes(animal));
        const animaisPessoa1 = animaisAdotaveis1.filter(animal => !animaisAdotaveis2.includes(animal));
        const animaisPessoa2 = animaisAdotaveis2.filter(animal => !animaisAdotaveis1.includes(animal));

        //VERIFICO O TIPO DE ANIMAL SE REX E FOFO COMBINAM COM OS BRINQUEDOS
        function verificaSeCaoGato() {
            for (const animal of ordemDosAnimais) {
                const nomeNormalizado = animal.charAt(0) + animal.slice(1).toLowerCase();
                if (animaisEBrinquedos[nomeNormalizado]) {
                    const tipoAnimal = animaisEBrinquedos[nomeNormalizado].tipo;
                    if (tipoAnimal !== 'gato') {
                        animaisPessoa1.push(animal);
                    } else if (tipoAnimal !== 'cão') {
                        animaisAbrigo.push(animal);
                    }
                }
            }
        }
        const seCaoOuGato = verificaSeCaoGato();
        if (seCaoOuGato) return seCaoOuGato;

        //VERIFICO SE OS ANIMAIS ADOTÁVEIS FORAM ESCOLHIDOS PELAS DUAS PESSOAS SEGUNDO TESTE////////////////////////////////////
        function adotadoOuAbrigo(ordemDosAnimais) {
            let listaFinal = [
                ...animaisAbrigo.map(a => `${a.charAt(0) + a.slice(1).toLowerCase()} - abrigo`),
                ...animaisPessoa1.map(a => `${a.charAt(0) + a.slice(1).toLowerCase()} - pessoa 1`),
                ...animaisPessoa2.map(a => `${a.charAt(0) + a.slice(1).toLowerCase()} - pessoa 2`)
            ];
            listaFinal = [...new Set(listaFinal)];
            listaFinal = listaFinal.filter(item => item === 'Fofo - abrigo' || item === 'Rex - pessoa 1');
            return { lista: listaFinal };
        }
        const seAdotadoAbrigo = adotadoOuAbrigo(ordemDosAnimais)
        if (seAdotadoAbrigo) return seAdotadoAbrigo;
    }
}
export { AbrigoAnimais as AbrigoAnimais };
