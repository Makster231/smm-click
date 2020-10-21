$(document).ready(() => {
    if (document.querySelector('.js_main-page')) {
        const controller = new ScrollMagic.Controller();

        function AnimationScene(section, tween, durationTime, offsetValue) {
            const scene = new ScrollMagic.Scene({
                    triggerElement: section,
                    triggerHook: 0.55,
                    duration: durationTime,
                    offset: offsetValue,
                })
                .reverse(true)
                .setTween(tween)
                .addTo(controller);
        }

        // header
        if (document.querySelector('.js_header_container-bottom')) {
            const tl_team_header = new TimelineMax();
            tl_team_header.from('.js_header_container-bottom--1, .js_header_container-bottom--2, .js_header_container-bottom--3, .js_header_container-bottom--4', 0.9, {
                x: '-40%',
                opacity: 0,
            });
            AnimationScene('.js_header_container-bottom', tl_team_header);
        }

        // application
        if ($(window).width() > 640) {
            if (document.querySelector('.js_application_steps')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_application-step--1', 0.4, {
                    x: '-40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_application-step--2', 0.4, {
                    x: '40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_application-step--3', 0.4, {
                    x: '40%',
                    y: '-40%',
                    opacity: 0,
                });
                AnimationScene('.js_application_steps', tl_team_header);
            }
        } else {
            if (document.querySelector('.js_application-step--1')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_application-step--1', 0.4, {
                    x: '-40%',
                    opacity: 0,
                });
                AnimationScene('.js_application-step--1', tl_team_header);
            }
            if (document.querySelector('.js_application-step--2')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_application-step--2', 0.4, {
                    x: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_application-step--2', tl_team_header);
            }
            if (document.querySelector('.js_application-step--3')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_application-step--3', 0.4, {
                    x: '-40%',
                    opacity: 0,
                });
                AnimationScene('.js_application-step--3', tl_team_header);
            }
        }

        // warranty



        // application
        if ($(window).width() > 640) {
            if (document.querySelector('.js_warranty_bottom')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_warranty_bottom-block--1', 0.4, {
                    x: '-40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_warranty_bottom-block--2', 0.4, {
                    y: '40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_warranty_bottom-block--3', 0.4, {
                    x: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_warranty_bottom', tl_team_header);
            }
        } else {
            if (document.querySelector('.js_warranty_bottom-block--1')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_warranty_bottom-block--1', 0.4, {
                    x: '-40%',
                    opacity: 0,
                });
                AnimationScene('.js_warranty_bottom-block--1', tl_team_header);
            }
            if (document.querySelector('.js_warranty_bottom-block--2')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_warranty_bottom-block--2', 0.4, {
                    x: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_warranty_bottom-block--2', tl_team_header);
            }
            if (document.querySelector('.js_warranty_bottom-block--3')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_warranty_bottom-block--3', 0.4, {
                    x: '-40%',
                    opacity: 0,
                });
                AnimationScene('.js_warranty_bottom-block--3', tl_team_header);

            }

        }


        // cases
        if ($(window).width() > 640) {

            if (document.querySelector('.js_cases-block--1')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_cases-block--1', 0.6, {
                    x: '-40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_cases-block--2', 0.6, {
                    x: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_cases-block--1', tl_team_header);
            }


            if (document.querySelector('.js_cases-block--4')) {
                const tl_team_header = new TimelineMax();

                tl_team_header.from('.js_cases-block--3', 0.6, {
                    x: '-40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_cases-block--4', 0.6, {
                    x: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_cases-block--4', tl_team_header);
            }
        } else {
            if (document.querySelector('.js_cases-block--1')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_cases-block--1', 0.4, {
                    y: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_cases-block--1', tl_team_header);
            }
            if (document.querySelector('.js_cases-block--2')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_cases-block--2', 0.4, {
                    y: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_cases-block--2', tl_team_header);
            }
            if (document.querySelector('.js_cases-block--3')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_cases-block--3', 0.4, {
                    y: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_cases-block--3', tl_team_header);
            }
            if (document.querySelector('.js_cases-block--4')) {
                const tl_team_header = new TimelineMax();
                tl_team_header.from('.js_cases-block--4', 0.4, {
                    y: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_cases-block--4', tl_team_header);
            }


        }

        //Promotion pages

        if($(window).width() > 640){

            if (document.querySelector('.js_promotion_slider')) {
                const tl_team_header = new TimelineMax();
    
                tl_team_header.from('.js_promotion_slider-item--1', 0.6, {
                    y: '40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_promotion_slider-item--2', 0.6, {
                    y: '40%',
                    opacity: 0,
                });
                tl_team_header.from('.js_promotion_slider-item--3', 0.9, {
                    y: '40%',
                    opacity: 0,
                });
                AnimationScene('.js_promotion_slider', tl_team_header);
            }
        }else{
            
            if (document.querySelector('.js_promotion_slider-item--1')) {
                const tl_team_header = new TimelineMax();

                tl_team_header.from('.js_promotion_slider-item--1', 0.6, {
                    x: '40%',
                    opacity: 0,
                });
                
                AnimationScene('.js_promotion_slider-item--1', tl_team_header);
            }
            
            if (document.querySelector('.js_promotion_slider-item--2')) {
                const tl_team_header = new TimelineMax();

                tl_team_header.from('.js_promotion_slider-item--2', 0.6, {
                    x: '-40%',
                    opacity: 0,
                });
                
                
                AnimationScene('.js_promotion_slider-item--2', tl_team_header);
            }
            
            if (document.querySelector('.js_promotion_slider-item--3')) {
                const tl_team_header = new TimelineMax();

                tl_team_header.from('.js_promotion_slider-item--3', 0.6, {
                    x: '40%',
                    opacity: 0,
                });
                
                AnimationScene('.js_promotion_slider-item--3', tl_team_header);
            }
        }


    }
});