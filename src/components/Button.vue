<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'Button'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        border: 1px green solid;
        outline: 0;
        padding: 12px;
        color: green;
        background-color: white;
        text-align: center;
        cursor: pointer;
        width: 80%;
        font-size: 18px;
    }

    .sale {
    background: green;
    color: white;
}
</style>