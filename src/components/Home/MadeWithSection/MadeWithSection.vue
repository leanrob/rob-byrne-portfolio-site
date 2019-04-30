<template>
    <div class="made-with-section">
        <div class="made-with-section__content">
            <div class="made-with-section__content--left">
                <div class="text-section">
                    <div class="text-section__heading">
                        How This Website Was Made
                    </div>
                    <div class="text-section__overview">
                        This site was is written in VueJs, deployed to a bucket hosted on the Google Cloud Platform. View source code for this site on Github.
                    </div>
                    <div class="text-section__point-list">
                        <div class="text-section__point-list--item">
                            <h4>
                                check - Javascript
                            </h4>
                        </div>
                        <div class="text-section__point-list--item">
                            <h4>
                                check - Deployment
                            </h4>
                        </div>
                        <div class="text-section__point-list--item">
                            <h4>
                                check - Open Source Code
                            </h4>
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
                            <p>$</p> <span>_</span>
                        </div>
                        <div class="google-cloud">
                            Google cloud
                            -- image
                        </div>
                        <div class="github">
                            Google cloud
                            -- image
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
