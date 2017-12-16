<template>
    <footer id="footer-contain">
        <div class="footer-author div-button" @click="openAuthor" title="Author Portfolio">
            © 2017 Bilal Abdullah
        </div>
        <div class="footer-links">
            <div class="footer-link div-button" @click="openGithub">
                <icon class="github" name="github" title="Open in github"></icon>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            
        }
    },
    methods: {
        openAuthor(){
            window.open("https://bilalabdullah.me");
            // var myWindow = window.open("", "MsgWindow", "width=200,height=100");
            // myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
        },
        openGithub(){
            window.open("https://github.com/AhadCove");
        },
    }
}
</script>

<style scoped>
    #footer-contain{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 80px;
        width: 100%;
        background-color: var(--biDark);
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* padding: 5px 10px; */
    }

    .footer-author{
        margin-left: 10px
    }

    .footer-links{
        margin-right: 10px;
        display: flex;
        align-items: center;
    }

    .github{
        width: auto;
        height: 1.6rem;
    }

    .github:hover{
        /* background-color: var(--compDark); */
    }
</style>