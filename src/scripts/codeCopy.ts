function initCodeCopyButtons(): void {
	const codeBlocks = document.querySelectorAll<HTMLElement>("pre");

	codeBlocks.forEach((block) => {
		if (block.parentElement?.classList.contains("code-block-wrapper")) return;

		const language = block.getAttribute("data-language") ?? "code";

		const wrapper = document.createElement("div");
		wrapper.className = "code-block-wrapper";

		const header = document.createElement("div");
		header.className = "code-block-header";

		const langLabel = document.createElement("span");
		langLabel.className = "code-block-lang";
		langLabel.textContent = language;

		const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
		const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

		const button = document.createElement("button");
		button.className = "copy-button";
		button.type = "button";
		button.innerHTML = `${copyIcon}<span>Copy</span>`;
		button.setAttribute("aria-label", "Copy code to clipboard");

		button.addEventListener("click", async () => {
			const code = block.querySelector("code")?.textContent ?? "";

			try {
				await navigator.clipboard.writeText(code);
				showToast("Copied to clipboard");
				button.innerHTML = `${checkIcon}<span>Copied!</span>`;
				button.classList.add("copied");
				setTimeout(() => {
					button.innerHTML = `${copyIcon}<span>Copy</span>`;
					button.classList.remove("copied");
				}, 2000);
			} catch (error) {
				showToast("Failed to copy");
			}
		});

		header.appendChild(langLabel);
		header.appendChild(button);

		block.parentElement?.insertBefore(wrapper, block);
		wrapper.appendChild(header);
		wrapper.appendChild(block);
	});
}

function showToast(message: string): void {
	const existing = document.querySelector(".toast");
	existing?.remove();

	const toast = document.createElement("div");
	toast.className = "toast";
	toast.textContent = message;
	document.body.appendChild(toast);

	requestAnimationFrame(() => {
		toast.classList.add("toast-visible");
	});

	setTimeout(() => {
		toast.classList.remove("toast-visible");
		setTimeout(() => toast.remove(), 300);
	}, 2000);
}

document.addEventListener("astro:page-load", initCodeCopyButtons);
initCodeCopyButtons();
