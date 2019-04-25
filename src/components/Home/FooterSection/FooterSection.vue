<template>
    <div class="footer-container">
        <div class="social-links">
            <a href="https://www.instagram.com/lean_rob/" target="_blank" class="social-links__card--insta" title="Follow me on Instagram">
                <v-icon name="brands/instagram" scale="4.5" />
            </a>
            <a href="https://www.linkedin.com/in/leanrob/" target="_blank" class="social-links__card--linkedin" title="Connect with me on LinkedIn">
                <v-icon name="brands/linkedin-in" scale="4.5" />
            </a>
            <a href="https://github.com/leanrob" target="_blank" class="social-links__card--github" title="Check me out on Github">
                <v-icon name="brands/github" scale="4.5" />
            </a>
            <a href="https://codepen.io/leanrob" target="_blank" class="social-links__card--blog" title="Some awesome CodePens">
                <v-icon name="brands/codepen" scale="4.5" />
            </a>
        </div>
        <div class="footer-text">
            Made with <v-icon name="heart" color="rgba(214, 42, 118, 1.00)" scale="2" /> in <a href="https://www.google.com/maps/search/?api=1&query=49.280791, -123.120006" target="_blank" class="footer-text__link">Vancouver, B.C.</a>
        </div>
    </div>
</template>

<script>
	export default {
		name: "FooterSection"
	}
</script>

<style scoped>

</style>