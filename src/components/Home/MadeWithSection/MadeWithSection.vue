<template>
    <div class="made-with-section">
        <div class="made-with-section__content">
            <div class="made-with-section__content--left">
                <div class="text-section">
                    <div class="text-section__heading">
                        How This Website Was Made
                    </div>
                    <div class="text-section__overview">
                        This website is a web app made using <a class="text-section__overview--vue" href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>,
                        deployed to a bucket hosted on <a class="text-section__overview--gcp" href="https://cloud.google.com/" target="_blank" rel="noopener">Google Cloud Platform</a>.
                        The code is open source and can be viewed on <a class="text-section__overview--github" href="https://github.com/leanrob/rob-byrne-portfolio-site" target="_blank" rel="noopener">Github</a>.
                    </div>
                    <div class="text-section__point-list">
                        <div class="text-section__point-list--item">
                            <span>
                                <v-icon name="check" scale="1" />
                                <h4>
                                    Javascript
                                </h4>
                            </span>
                            <a href="https://vuejs.org/" target="_blank" rel="noopener"><img src="./../../../assets/logos/vue-logo-with-text.png"/></a>
                        </div>
                        <div class="text-section__point-list--item">
                            <span>
                                <v-icon name="check" scale="1" />
                                <h4>
                                    Deployment
                                </h4>
                            </span>
                            <a href="https://cloud.google.com/" target="_blank" rel="noopener"><img src="./../../../assets/logos/google-cloud-platform-with-text.png"/></a>
                        </div>
                        <div class="text-section__point-list--item">
                            <span>
                                <v-icon name="check" scale="1" />
                                <h4>
                                    Open Source Code
                                </h4>
                            </span>
                            <a href="https://github.com/leanrob/rob-byrne-portfolio-site" target="_blank" rel="noopener"><img src="./../../../assets/logos/github-logo-with-text.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="made-with-section__content--right">
                <div class="mac-window">
                    <div class="window-control red"> </div>
                    <div class="window-control yellow"> </div>
                    <div class="window-control green"> </div>
                    <div class="text-window">
                        <div class="blinking-cursor">
                            <p>$ yarn add vue</p> <span>_</span>
                        </div>
                        <div class="google-cloud">

                        </div>
                        <div class="github">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "MadeWithSection",
	};
</script>
