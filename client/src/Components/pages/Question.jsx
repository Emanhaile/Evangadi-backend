import React, { useRef, useState } from "react";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

    const Question = () => {
    const navigate = useNavigate();
    const titleDOM = useRef();
    const descriptionDOM = useRef();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); // State for error messages

    const handleEvent = async (e) => {
        e.preventDefault();

        const titleValue = titleDOM.current.value;
        const descriptionValue = descriptionDOM.current.value;

        // Check if all required fields are provided
        if (!titleValue || !descriptionValue) {
        alert("Please enter all required fields.");
        return;
        }

        try {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You are not authenticated.");
            navigate("/login");
            return;
        }

        const response = await axios.post(
            "/questions/addquestion",
            {
            title: titleValue,
            description: descriptionValue,
            },
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        );

        // Assuming the response contains the newly created question data
        const newQuestion = response.data;
        setData(newQuestion);

        alert("Submitted question successfully.");

        // Navigate to the specific answer page for the newly posted question
        navigate(`/`); // Ensure this route exists in your app.
        } catch (error) {
        console.error("Error submitting the question:", error);

        // Set a more descriptive error message based on the response
        if (error.response) {
            // The request was made, and the server responded with a status code not in the range of 2xx
            setError(
            error.response.data.message ||
                "There was a problem with your submission."
            );
        } else if (error.request) {
            // The request was made, but no response was received
            setError("No response from the server. Please check your network.");
        } else {
            // Something else caused an error
            setError("An unexpected error occurred. Please try again.");
        }
        }
    };

    return (
        <div>
        <section className="">
            <h2 className="text-center font-bold text-2xl mt-10">
            Steps to Write Good Questions
            </h2>
            <div className="text-center mx-auto">
            <div className="text-sm">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.....</li>
                <li>Explain what you tried and what you expect.</li>
                <li>Review your question and post it to the site.</li>
            </div>
            </div>
            <form
            onSubmit={handleEvent}
            className="text-center mt-24 max-w-[1000px] boxshadow-2xl mx-auto rounded-2xl h-[300px] border mb-10 shadow-2xl"
            >
            <h1 className="text-2xl">Ask Public Questions</h1>
            <p>Go to Questions page</p>
            <div>
                {data && (
                <p className="text-green-500">
                    You have successfully posted your question!
                </p>
                )}
                {error && <p className="text-red-500">{error}</p>}{" "}
                {/* Display error message */}
                <input
                type="text"
                ref={titleDOM}
                placeholder="Title"
                name="title"
                className="w-[90%] h-[40px] rounded-2xl border border-gray-400 my-2 bg-gray-300"
                />
            </div>
            <div>
                <textarea
                className="w-[90%] rounded-2xl h-[120px] border bg-gray-300"
                ref={descriptionDOM}
                name="description"
                placeholder="Describe your question in detail"
                ></textarea>
            </div>
            <button type="submit" className=" bg-blue-600 text-white border rounded py-1 px-10  my-1 ">
                Post Your Question
            </button>
            </form>
        </section>
        </div>
    );
    };

    export default Question;
