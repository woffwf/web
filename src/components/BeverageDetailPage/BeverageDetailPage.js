import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBeverage, fetchBeverageById } from '../../api';
import Loader from '../Loader/Loader';
import ButtonSelect from '../ButtonSelect/ButtonSelect';
import EditBeverageModal from '../EditBeverageModal/EditBeverageModal'; // Переконайтесь, що шлях до файлу вірний
import './BeverageDetailPage.css';

function BeverageDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [beverage, setBeverage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false); // Для управління відображенням модального вікна

    useEffect(() => {
        setIsLoading(true);
        fetchBeverageById(id)
            .then(response => {
                setBeverage(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Помилка при завантаженні напою:', error);
                setIsLoading(false);
            });
    }, [id]);

    const handleDelete = () => {
        deleteBeverage(id).then(() => {
            alert('Напій успішно видалено.');
            navigate('/beverages');
        }).catch(error => {
            console.error('Помилка при видаленні напою:', error);
            alert('Виникла помилка під час видалення напою. Спробуйте знову пізніше.');
        });
    };

    const goBack = () => {
        navigate(-1);
    };

    const openEditModal = () => setShowEditModal(true);
    const closeEditModal = () => setShowEditModal(false);

    if (isLoading) {
        return <Loader />;
    }

    if (!beverage) {
        return <p>Напій не знайдено.</p>;
    }

    return (
        <div className="beverage-detail-container">
            <h2 className="beverage-title">{beverage.name}</h2>
            <div className="beverage-content">
                <img className="beverage-image" src={beverage.image} alt={beverage.name} />
                <div className="beverage-info">
                    <p className="beverage-brand"><strong>Бренд:</strong> {beverage.brand}</p>
                    <p className="beverage-price"><strong>Ціна:</strong> {beverage.price}₴</p>
                    <p className="beverage-volume"><strong>Об'єм:</strong> {beverage.volume}</p>
                    <p className="beverage-description">{beverage.description}</p>
                    <ButtonSelect onClick={goBack}>Повернутися до списку</ButtonSelect>
                    <ButtonSelect onClick={openEditModal}>Редагувати</ButtonSelect>
                    <ButtonSelect onClick={handleDelete}>Видалити</ButtonSelect>
                </div>
            </div>
            {showEditModal && <EditBeverageModal beverage={beverage} onClose={closeEditModal} />}
        </div>
    );
}

export default BeverageDetailPage;
