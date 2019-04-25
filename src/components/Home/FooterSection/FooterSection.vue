<template>
    <div class="footer-container">
        <div class="social-links">
            <div class="social-links__card--insta">
                <v-icon name="brands/instagram" scale="4.5" />
            </div>
            <div class="social-links__card--linkedin">
                <v-icon name="brands/linkedin-in" scale="4.5" />
            </div>
            <div class="social-links__card--github">
                <v-icon name="brands/github" scale="4.5" />
            </div>
            <div class="social-links__card--blog">
                <v-icon name="rss" scale="4.5" />
            </div>
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