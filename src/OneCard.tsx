import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup } from 'react-bootstrap';

function OneCard({
  addResultHandler,
}: {
  addResultHandler(value: number): void;
}) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const onClick = () => {
    addResultHandler(Number(inputValue));
    setInputValue('');
    setIsDisabled(true);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((e.target.value = e.target.value.replace(/[^\d,]/g, '')));
    if (e.target.value) {
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <input
          className="form-control"
          type="text"
          value={inputValue}
          onChange={(e) => onChange(e)}
          placeholder="введите число"
        />

        <Button onClick={onClick} disabled={isDisabled} variant="primary">
          Подтвердить
        </Button>
      </InputGroup>
    </div>
  );
}

export default OneCard;
