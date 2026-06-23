"use client";

import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER } from "@/lib/contato";

export default function CartDrawer() {
  const { items, removeItem, clearCart, isOpen, closeCart } = useCart();

  const handleFecharPedido = () => {
    if (items.length === 0) return;

    const lista = items.map((i) => `• ${i.label}`).join("\n");
    const mensagem =
      `Olá! Gostaria de contratar os seguintes serviços da Velluxia:\n\n${lista}\n\nPodemos conversar?`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    clearCart();
    closeCart();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[400px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="size-5 text-[#1E3A8A]" />
            <h2 className="font-fustat font-semibold text-[#1E3A8A] text-lg">
              Meu pedido
            </h2>
            {items.length > 0 && (
              <span className="size-5 rounded-full bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-lg hover:bg-[#F1F5F9] transition-colors"
            aria-label="Fechar carrinho"
          >
            <X className="size-5 text-[#64748B]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="size-16 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <ShoppingBag className="size-8 text-[#CBD5E1]" />
              </div>
              <p className="font-fustat font-semibold text-[#1E3A8A]">
                Carrinho vazio
              </p>
              <p className="font-interTight text-sm text-[#64748B]">
                Escolha um serviço e clique em Comprar.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
                      <span className="text-[#7C3AED] text-xs font-bold">✓</span>
                    </div>
                    <span className="font-fustat font-semibold text-sm text-[#1E3A8A]">
                      {item.label}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-[#CBD5E1] hover:text-red-400 transition-colors shrink-0"
                    aria-label={`Remover ${item.label}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-[#E2E8F0] flex flex-col gap-3">
          <button
            onClick={handleFecharPedido}
            disabled={items.length === 0}
            className="w-full py-3.5 px-6 rounded-full bg-[#16A34A] hover:bg-[#15803D] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] disabled:cursor-not-allowed text-white font-fustat font-semibold text-base transition-all duration-200"
          >
            Fechar pedido no WhatsApp →
          </button>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="w-full py-2 text-xs font-interTight text-[#94A3B8] hover:text-red-400 transition-colors"
            >
              Limpar carrinho
            </button>
          )}
          <p className="text-center text-xs font-interTight text-[#CBD5E1]">
            Nenhuma cobrança agora. A gente entra em contato para combinar tudo.
          </p>
        </div>
      </div>
    </>
  );
}
