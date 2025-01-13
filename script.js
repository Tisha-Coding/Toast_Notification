
       const toastContainer = document.getElementById('toast-container');
        function showToast(type,message)
        {
            const toast = document.createElement("div");
            toast.className = `toast ${type}`;
            toast.innerHTML = `
            <span>${message}</span>
            <span class="close">&times;</span>
            `;

            toastContainer.appendChild(toast);

            const autoHide = setTimeout(() =>
        {
            toast.remove();
        }, 5000
    );

    toast.querySelector(".close").addEventListener("click",() =>
{
    clearTimeout(autoHide);
    toast.remove();
});
        }


        const successBtn = document.querySelector('#success');
        successBtn.addEventListener('click',function()
    {
        showToast("success", "✓ Success! Operation completed.");
    })

    const errorBtn = document.querySelector('#error');
        errorBtn.addEventListener('click',function(event)
    {
        showToast("error", "✕ Error! Something went wrong.")
    })

    const warningBtn = document.querySelector('#warning');
        warningBtn.addEventListener('click',function(event)
    {
        showToast("warning","⚠ Warning! Please be careful.")
    })

    const infoBtn = document.querySelector('#info');
        infoBtn.addEventListener('click',function(event)
    {
        showToast("info", "ℹ Info! Here is some information.");
    })
    