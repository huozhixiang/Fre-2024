const Api = (() =>{
    const url = "http://localhost:4232/courseList";
    const getData = fetch(url).then((res) => res.json());
    return{
        getData,
    };
})();

const View = (() => {
    const domstr = {
        available: ".aCourses",
        selected: ".sCourses",
        credits: ".credits",
        submit: ".select-btn",
    };
    
    const render = (ele, content) => {
        ele.innerHTML = content;
    };

    const createLists = (arr) => {
        let tmp = "";
        arr.forEach(element => {
            let type = element.required ? "Compulsory" : "Elective";
            tmp += `
                <li>
                <span>${element.courseName}</span>
                <span>Course Type: ${type}</span>
                <span>Course Credit: <span>${element.credit}</span><span>
                </li>`;
        });
        return tmp;
    };

    return {
        domstr
        , render
        , createLists
    , }
})();
const Model = ((view, api) => {
    const { getData } = api;
    const { domstr, render, createLists } = view;

    class State {
        constructor(){
            this._maxCredits = 18;
            this._avaliableList = [];
            this._selectedList = [];
            this._totalCredits = 0;
        }

        get avaliableList() {
            return this._avaliableList;
        }

        set avaliableList(list) {
            this._avaliableList = [...list];
            const courseContainer = document.querySelector(domstr.available);
            const temp = createLists(this._avaliableList);
            render(courseContainer, temp);
        }

        get selectedList() {
            return this._selectedList;
        }

        get totalCredits() {
            return this._totalCredits;
        }

        set totalCredits(num) {
            this._totalCredits = num;
            const credit = document.querySelector(domstr.credits);
            let temp = this._totalCredits + " ";
            render(credit, temp);
        }
        

        addCourseToSelected(courseName) {
            const course = this._avaliableList.find(c => c.courseName === courseName);
            if (course && this._totalCredits + course.credit <= this._maxCredits) {
                this._selectedList.push(course);
                this._avaliableList = this._avaliableList.filter(c => c.courseName !== courseName);
                this._totalCredits += course.credit;
            }
        }
    
        finalizeSelection() {
            const courseContainer = document.querySelector(view.domstr.available);
            const selectedContainer = document.querySelector(view.domstr.selected);
            render(courseContainer, createLists(this._avaliableList));
            render(selectedContainer, createLists(this._selectedList));
            this.totalCredits = this._totalCredits;
        }
    }
    return {
        getData
        , State
    , };
})(View, Api);

const Controller = ((view, model) => {
    const { getData
        , State} = model;
    const { domstr } = view;

    const state = new State();

    const init = () => {
        getData.then((lists) => {
            state.avaliableList = lists;
            addListenersToAvailableCourses();

        });

    }

    const addListenersToAvailableCourses = () => {
        const availableCourses = document.querySelectorAll(view.domstr.available + ' li');
        availableCourses.forEach(course => {
            course.addEventListener('click', () => {
                const courseName = course.querySelector('span').innerText;
                course.classList.toggle('selected-course');
                state.addCourseToSelected(courseName);
                console.log(course);
            });
        });
    };


    const submit = () => {
        console.log("loading")
        const btn = document.querySelector(domstr.submit);
        btn.addEventListener("click", (event) => {
            console.log("this is clicked")
            let msg ="You have chosen " + state.totalCredits 
            + " credits for this semester. You cannot change once you submit. Do you want to confirm?"
            if (confirm(msg)) {
                state.finalizeSelection();
                btn.disabled = true;
                alert('Your courses have been submitted successfully!');
            } else {
                alert('Submission cancelled.');
            }
        });
    }

    const bootstrap = () => {
        init();
        submit();
    };

    return {
        bootstrap
    , };
})(View, Model);

document.addEventListener('DOMContentLoaded', (event) => {
    Controller.bootstrap();
});