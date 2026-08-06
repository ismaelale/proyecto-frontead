<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

const irHome = () => {
    router.push('/home');
};

</script>

<template >
    <div class="flex justify-center items-center h-screen">
        <div class="seccion-login-input flex flex-col items-center gap-5">
            <h2 class="text-4xl">Login</h2>
            <section>
                <label for="usuario">Usuario</label>
                <input type="text" id="usuario" class="rounded-md">
            </section>
            <section>
                <label for="password">Contraseña</label>
                <input type="text" id="password" class="rounded-md">
            </section>
            <button @click="irHome" id="boton-ingresar" class="cursor-pointer w-50 text-center p-1 rounded-md">
                Ingresar
            </button>
        </div>
        
        
    </div>
</template>