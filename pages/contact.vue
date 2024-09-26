<template>
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">ติดต่อเรา</h2>
        <p class="text-lg sm:text-xl text-gray-600 mb-8">
            หากคุณต้องการข้อมูลเพิ่มเติม หรือต้องการติดต่อเรา สามารถกรอกข้อมูลในฟอร์มด้านล่างหรือใช้วิธีติดต่ออื่น ๆ
            ได้ตามสะดวก
        </p>
        <form class="max-w-lg mx-auto">
            <div class="mb-4">
                <label for="name" class="block text-left text-gray-700">ชื่อ</label>
                <input type="text" id="name" class="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-left text-gray-700">อีเมล</label>
                <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div class="mb-4">
                <label for="message" class="block text-left text-gray-700">ข้อความ</label>
                <textarea id="message" class="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                ส่งข้อความ
            </button>
        </form>
    </div>
</template>

<script setup>
</script>

<style scoped></style>