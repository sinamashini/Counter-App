"use client";

import { useState, useCallback } from "react";
import { type CounterProps } from "@/types";
import { cn } from "@/lib/utils";
import PlusIcon from "@/components/ui/icons/PlusIcon";
import MinusIcon from "@/components/ui/icons/MinusIcon";
import ResetIcon from "@/components/ui/icons/ResetIcon";
import { Button } from "@/components/ui/Button";

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  const handleIncrement = useCallback((): void => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback((): void => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  }, []);

  const handleReset = useCallback((): void => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div
      className={cn(
        "flex flex-col items-center p-6 border border-white/20 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl",
        "max-w-sm mx-auto md:p-8 lg:max-w-md"
      )}
      role="region"
      aria-label="Counter"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900 drop-shadow-sm sm:text-5xl md:text-6xl">
        {count}
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <Button
          variant="primary"
          size="md"
          onClick={handleIncrement}
          aria-label="Increment count"
          title="Increment count"
          icon={<PlusIcon />}
        />
        <Button
          variant="destructive"
          size="md"
          onClick={handleDecrement}
          disabled={count === 0}
          aria-label="Decrement count"
          title="Decrement count"
          icon={<MinusIcon />}
        />
        <Button
          variant="secondary"
          size="md"
          onClick={handleReset}
          aria-label="Reset count"
          title="Reset count"
          icon={<ResetIcon />}
        />
      </div>
    </div>
  );
}
