import { useEffect } from "react";

type BookingModalProps = { isOpen: boolean; onClose: () => void; };
export default function BookingModal({
    isOpen, onClose,
}: BookingModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {document.body.style.overflow ="";}
        return () => {
            document.body.style.overflow ="";
        };
    }, [isOpen]);
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-100 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-(--green) w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative" onClick={(event)=> event.stopPropagation()}>
                {/*closing the modal */}
                <button onClick={onClose} aria-label="Close booking form" className="absolute top-4 right-4 text-2xl">
                    ×
                </button>
                <div className="mb-8">
                    <h2 className="text-2xl font-medium">
                        Book an Appointment
                    </h2>
                    <p className="text-sm text-black/60 mt-2">
                        Fill in your booking details below.
                    </p>
                </div>
                <form className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm mb-2">
                            Name
                        </label>
                        <input type="text" name="name" required placeholder="Paulo Paul" className="w-full bg-(--pink) px-4 py-3 outline-none"/>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Phone Number
                        </label>
                        <input type="tel" name="phone" required placeholder="+254..." className="w-full bg-(--pink) px-4 py-3 outline-none"/>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Instagram Username
                        </label>
                        <input type="text" name="instagram" placeholder="@username" className="w-full bg-(--pink) px-4 py-3 outline-none"/>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Service
                        </label>
                        <select name="" required className="w-full bg-(--pink) px-4 py-3 outline-none">
                            <option value="">Select a service</option>
                            <option value="Manicure">Manicure</option>
                            <option value="Gel X">Gel X</option>
                            <option value="Custom Press-ons">Custom Press-ons</option>
                            <option value="Tips & Gel">Tips & Gel</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Design Tier
                        </label>
                        <select name="" required className="w-full bg-(--pink) px-4 py-3 outline-none">
                            <option value="">Select a design tier</option>
                            <option value="Tier 1">Tier 1 - Simple</option>
                            <option value="Tier 2">Tier 2 - Detailed</option>
                            <option value="Tier 3">Tier 3 - Premium</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm mb-2">
                                Preferred Date
                            </label>
                            <input type="date" name="date" required className="w-full bg-(--pink) px-4 py-3 outline-none"/>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">
                                Preferred Time
                            </label>
                            <input type="time" name="time" required className="w-full bg-(--pink) px-4 py-3 outline-none"/>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">
                                Additional Notes
                            </label>
                            <textarea name="notes" rows={4} placeholder="Tell us anything else we should know..." className="w-full bg-(--pink) px-4 py-3 outline-none resize-none"/>
                        </div>
                        <button type="submit" className="bg-(--brown) text-white rounded-full px-8 py-3 mt-2">
                            Submit Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}