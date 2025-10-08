<template>

</template>

<script setup lang="ts">
import type { Jogador } from '@/types/typesJogador';
import { reactive } from 'vue';

    

const jogadorForm = reactive<Jogador>({
    id: 0,
    nome: '',
    numeroCamisa: '',
    posicao: 'Goleiro',
    dataNascimento: '',
    naturalidade: '',
    nacionalidade: '',
    altura: 0,
    pePreferido: 'Direito',
    telefone: '',
    email: '',
    documento: '',
    situacao: 'Ativo'
});

</script>