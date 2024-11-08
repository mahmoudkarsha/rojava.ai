export default function getFadeInProps(when = 'load', direction = 'right', delay = 0.1, amount = 0.3) {
        let initialX = 20;
        if (direction === 'right' && document.dir === 'ltr') initialX = initialX * 1;
        if (direction === 'left' && document.dir === 'rtl') initialX = initialX * -1;

        return {
                initial: { x: initialX, opacity: 0 },
                animate: when === 'load' ? { x: 0, opacity: 1, transition: { delay } } : undefined,
                whileInView: when === 'view' ? { x: 0, opacity: 1, transition: { delay, duration: 0.5 } } : undefined,
                viewport: when === 'view' ? { amount, once: true } : undefined,
        };
}
