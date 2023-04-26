<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="flex items-center py-3 w-full bg-red-600 justify-between px-[24px]"
  >
    <div class="space-x-10 flex items-center">
      <div class="space-x-4">
        <button
          class="border-2 border-white hover:border-red-200 px-3 bg-white rounded-lg py-1 text-red-500 hover:bg-red-200"
        >
          {{ mudatliTolov }}
        </button>
        <button
          class="border-2 hover:border-red-200 px-3 rounded-lg py-1 bg-transparent text-white hover:text-red-200"
        >
          {{ chegirmalar }}
        </button>
        <button
          class="border-2 border-white hover:border-red-200 px-3 bg-white rounded-lg py-1 text-red-500 hover:bg-red-200"
        >
          {{ yutuqliOyinlar }}
        </button>
      </div>
      <a href="#" class="text-white hover:text-red-200">{{ satyHaritasi }}</a>
    </div>
    <div class="flex items-center">
      <a
        class="text-2xl font-bold text-white hover:text-red-200"
        href="tel:+998712022021"
        aria-label="+998712022021"
      >
        +998 (71) 202 2021
      </a>
      <button
        class="border-2 border-white px-3 rounded-lg py-1 bg-transparent text-white hover:text-red-500 hover:bg-white mx-7"
      >
        {{ olchadaSoting }}
      </button>

      <div
        class="flex space-x-4 border-[1px] border-t-transparent border-b-transparent px-[24px] text-red-200"
      >
        <button @click="krilLotin" class="hover:text-white focus:font-bold">
          Ўзб
        </button>
        <button @click="ozbekLotin" class="hover:text-white focus:font-bold">
          O'z
        </button>
        <button @click="krilrus" class="hover:text-white focus:font-bold">
          Pyc
        </button>
      </div>
    </div>
  </nav>
  <main class="flex px-10 py-10 items-center space-x-9">
    <a href="#"
      ><img
        src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg"
        alt="olcha.uz"
        width="102"
        height="30"
    /></a>
    <button
      class="border-2 rounded-lgatalog py-2 px-5 rounded-lg hover:text-red-600 hover:border-red-600 text-[20px] flex items-center gap-2"
    >
      <i class="bi bi-list text-[23px]"></i>{{ katalog }}
    </button>
    <div>
      <input
        type="text"
        placeholder="search"
        class="py-3 px-5 rounded-lg w-[590px] bg-slate-100 focus:bg-white"
      />
      <button
        class="px-5 py-2 border rounded-lg bg-red-600 text-white ms-[-66px]"
      >
        <i class="bi bi-search"></i>
      </button>
    </div>
    <RouterLink
      to="/taqqoslash"
      href="#"
      class="hover:text-red-600 items-center flex"
      style="flex-direction: column"
    >
      <i class="bi bi-text-left text-[24px]"></i>
      <p class="text-[14px]">{{ taqqoslash }}</p>
    </RouterLink>
    <RouterLink
      to="/sevimlilar"
      href="#"
      class="hover:text-red-600 items-center flex"
      style="flex-direction: column"
    >
      <i class="bi bi-heart text-[24px]"></i>
      <p class="text-[14px]">{{ sevimlilar }}</p>
    </RouterLink>
    <RouterLink
      to="savatcha"
      href="#"
      class="hover:text-red-600 items-center flex"
      style="flex-direction: column"
    >
      <span
        class="w-[15px] h-[15px] bg-red-600 rounded-full flex justify-center items-center text-[12px] mb-[-18px] ms-[15px] text-white z-10"
        >0</span
      >
      <i class="bi bi-cart text-[24px]"></i>
      <p class="text-[14px]">{{ savatcha }}</p>
    </RouterLink>
    <a
      href="#"
      class="hover:text-red-600 items-center flex"
      style="flex-direction: column"
    >
      <i class="bi bi-person text-[24px]"></i>
      <p class="text-[14px]">{{ kirish }}</p>
    </a>
  </main>
  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      mudatliTolov: "0% Muddatli to'lov",
      chegirmalar: "Chegirmalar",
      yutuqliOyinlar: "Yutuqli o'yinlar",
      satyHaritasi: "Sayt xaritasi ",
      olchadaSoting: "Olcha da soting",
      katalog: " Katalog",
      taqqoslash: "Taqqoslash",
      sevimlilar: "Sevimlilar",
      savatcha: "Savatcha",
      kirish: "Kirish",
    };
  },
  methods: {
    ozbekLotin() {
      this.mudatliTolov = "0% Muddatli to'lov";
      this.chegirmalar = "Chegirmalar";
      this.yutuqliOyinlar = "Yutuqli o'yinlar";
      this.satyHaritasi = "Sayt xaritasi";
      this.olchadaSoting = "Olcha da soting";
      this.katalog = " Katalog";
      this.taqqoslash = "Taqqoslash";
      this.sevimlilar = "Sevimlilar";
      this.savatcha = "Savatcha";
      this.kirish = "Kirish";
    },
    krilLotin() {
      this.mudatliTolov = "0% Муддатли тўлов";
      this.chegirmalar = "Чегирмалар";
      this.yutuqliOyinlar = "Ютуқли ўйинлар";
      this.satyHaritasi = "Сайт харитаси";
      this.olchadaSoting = "olcha да сотинг";
      this.katalog = "Каталог";
      this.taqqoslash = "Таққослаш";
      this.sevimlilar = "Севимлилар";
      this.savatcha = "Саватча";
      this.kirish = "Кириш";
    },
    krilrus() {
      this.mudatliTolov = "0% Рассрочка";
      this.chegirmalar = "Скидки";
      this.yutuqliOyinlar = "Розыгрыши";
      this.satyHaritasi = "Карта сайта";
      this.olchadaSoting = "Продавайте на olcha";
      this.katalog = " Каталог";
      this.taqqoslash = "Сравнение";
      this.sevimlilar = "Избранные";
      this.savatcha = "Корзина";
      this.kirish = "Войти";
    },
  },
};
</script>

<style scoped></style>
