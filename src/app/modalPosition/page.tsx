"use client"

import { useEffect, useRef, useState } from 'react';
import Modal from '@components/modal/Modal';
import './page.scss';
import data from "../../../data/page.json"
import { useRouter, useSearchParams } from 'next/navigation';
import useModalToggle from '../../hooks/useModalToggle';

const Home = ({
    yPos=100
}) => {

    const targetRef = useRef<HTMLElement>(null);

    const { modalActive, setModalActive, setUserModalClosed } = useModalToggle(targetRef, yPos);

    // useEffect(() => {
    //     const handleModalAppearance = () => {
    //         if (!userModalClosed) {
    //             if (targetRef.current) {
    //                 const targetRect = targetRef.current.getBoundingClientRect();

    //                 if (targetRect.y <= yPos) {
    //                     setModalActive(true);
    //                 } else {
    //                     setModalActive(false);
    //                 }
    //             }
    //         }

    //     };

    //     window.addEventListener('scroll', handleModalAppearance);

    //     handleModalAppearance();

    //     return () => {
    //         window.removeEventListener('scroll', handleModalAppearance);
    //     }

    // }, [userModalClosed, modalActive, targetRef]);

    return (

        <>

            <header>
                <h1>Recipe Collection</h1>
                <nav>
                    <ul>
                        <li><a href="#recipe1">Recipe 1</a></li>
                        <li><a href="#recipe2">Recipe 2</a></li>
                        <li><a href="#recipe3">Recipe 3</a></li>
                        <li><a href="#recipe4">Recipe 4</a></li>
                        <li><a href="#recipe5">Recipe 5</a></li>
                        <li><a href="#recipe6">Recipe 6</a></li>
                        <li><a href="#recipe7">Recipe 7</a></li>
                        <li><a href="#recipe8">Recipe 8</a></li>
                        <li><a href="#recipe9">Recipe 9</a></li>
                        <li><a href="#recipe10">Recipe 10</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="recipe1" className="recipe-section">
                    <h2>Recipe 1: classNameic Spaghetti Bolognese</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>400g spaghetti</li>
                        <li>200g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>400g canned tomatoes</li>
                        <li>2 tbsp tomato paste</li>
                        <li>1 tsp dried oregano</li>
                        <li>Salt and pepper to taste</li>
                        <li>Olive oil</li>
                        <li>Grated Parmesan cheese (optional)</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Cook the spaghetti according to package instructions.</li>
                        <li>In a large pan, heat olive oil and sauté the onion and garlic until soft.</li>
                        <li>Add the ground beef and cook until browned.</li>
                        <li>Stir in the canned tomatoes, tomato paste, oregano, salt, and pepper.</li>
                        <li>Simmer for 20 minutes, stirring occasionally.</li>
                        <li>Serve the sauce over the spaghetti and sprinkle with Parmesan cheese if desired.</li>
                    </ol>
                </section>

                <section id="recipe2" className="recipe-section">
                    <h2>Recipe 2: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe3" className="recipe-section">
                    <h2>Recipe 3: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section ref={targetRef} id="recipe4" className="recipe-section">
                    {modalActive && (
                        <Modal bgColor='#000000bb' modalActive={modalActive} setModalActive={setModalActive} setUserModalClosed={setUserModalClosed}>
                            <h2>Recipe 4: Chicken Curry</h2>
                            <h3>Ingredients:</h3>
                            <ul>
                                <li>500g chicken breast, diced</li>
                                <li>1 onion, chopped</li>
                                <li>2 garlic cloves, minced</li>
                                <li>1 tbsp curry powder</li>
                                <li>400ml coconut milk</li>
                                <li>1 tbsp vegetable oil</li>
                                <li>Salt and pepper to taste</li>
                                <li>Fresh cilantro for garnish</li>
                            </ul>
                            <h3>Instructions:</h3>
                            <ol>
                                <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                                <li>Add the chicken and cook until browned.</li>
                                <li>Stir in the curry powder and cook for 1 minute.</li>
                                <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                                <li>Garnish with fresh cilantro before serving.</li>
                            </ol>
                        </Modal>
                    )}
                    <h2>Recipe 4: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe5" className="recipe-section">
                    <h2>Recipe 5: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe6" className="recipe-section">
                    <h2>Recipe 6: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe7" className="recipe-section">
                    <h2>Recipe 7: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe8" className="recipe-section">
                    <h2>Recipe 8: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe9" className="recipe-section">
                    <h2>Recipe 9: Chicken Curry</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g chicken breast, diced</li>
                        <li>1 onion, chopped</li>
                        <li>2 garlic cloves, minced</li>
                        <li>1 tbsp curry powder</li>
                        <li>400ml coconut milk</li>
                        <li>1 tbsp vegetable oil</li>
                        <li>Salt and pepper to taste</li>
                        <li>Fresh cilantro for garnish</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Heat the oil in a pan and sauté the onion and garlic until fragrant.</li>
                        <li>Add the chicken and cook until browned.</li>
                        <li>Stir in the curry powder and cook for 1 minute.</li>
                        <li>Add the coconut milk, salt, and pepper, and simmer for 20 minutes.</li>
                        <li>Garnish with fresh cilantro before serving.</li>
                    </ol>
                </section>

                <section id="recipe10" className="recipe-section">
                    <h2>Recipe 10: Chocolate Chip Cookies</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>1 cup butter, softened</li>
                        <li>1 cup granulated sugar</li>
                        <li>1 cup brown sugar</li>
                        <li>2 large eggs</li>
                        <li>2 1/4 cups all-purpose flour</li>
                        <li>1/2 tsp baking soda</li>
                        <li>1/2 tsp baking powder</li>
                        <li>1/2 tsp salt</li>
                        <li>1 cup chocolate chips</li>
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Preheat the oven to 350°F (175°C).</li>
                        <li>In a large bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.</li>
                        <li>Beat in the eggs one at a time.</li>
                        <li>In a separate bowl, mix together the flour, baking soda, baking powder, and salt.</li>
                        <li>Gradually add the dry ingredients to the butter mixture, mixing until combined.</li>
                        <li>Fold in the chocolate chips.</li>
                        <li>Drop rounded tablespoons of dough onto a baking sheet.</li>
                        <li>Bake for 10-12 minutes, or until golden brown. Cool on a wire rack.</li>
                    </ol>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Your Recipe Website</p>
            </footer>

        </>

    );
}

export default Home;
