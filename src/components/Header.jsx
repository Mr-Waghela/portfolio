import '../styles/Header.css'
import $ from 'jquery';
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        // scroll menu
        var sections = $('.section'),
            nav = $('.navbar-fixed-top,footer'),
            nav_height = nav.outerHeight();

        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a').removeClass('active');
                    sections.removeClass('active');

                    $(this).addClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });

        nav.find('a').on('click', function () {
            var $el = $(this),
                id = $el.attr('href');

            $('html, body').animate({
                scrollTop: $(id).offset().top - nav_height + 2
            }, 600);

            return false;
        });
        // Menu opacity
        if ($(window).scrollTop() > 30) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() > 30) {
                $(".navbar-fixed-top").addClass("bg-nav");
            } else {
                $(".navbar-fixed-top").removeClass("bg-nav");
            }
        });
    },[])

    return (
    <>
        <header className="navbar-fixed-top">
            <nav className="d-flex justify-content-between align-center">
                <div className="mobile-menu">
                    <div className="overlay">
                        <label htmlFor="toggle"></label>
                    </div>
                    <input type="checkbox" id="toggle" name="toggle"/>
                    <div className="verticalNav">
                        <a href="#about">About</a>
                        <a href="#experience">experience</a>
                        <a href="#projects">projects</a>
                        <a href="#contact">contact</a>
                    </div>
                </div>
                <div className="logo-wrap">
                    <a href="#contact" className="logo-trans"><span className="logo">CW</span></a>
                </div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">experience</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header